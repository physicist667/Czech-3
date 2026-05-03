# ---- Build stage ----
FROM oven/bun:1.1 AS builder
WORKDIR /app

# Install dependencies (using lockfile for reproducibility)
COPY package.json ./
RUN bun install

# Generate Prisma client (needed even if unused — db.ts exists)
COPY prisma ./prisma/
RUN bunx prisma generate

# Copy source and build
COPY . .

# NEXT_TELEMETRY_DISABLED reduces noise
ENV NEXT_TELEMETRY_DISABLED=1

# Build Next.js in standalone mode
RUN bun run build

# ---- Production stage ----
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy standalone output (contains the server + all traced dependencies)
COPY --from=builder /app/.next/standalone ./

# Copy static assets (CSS, JS bundles, images)
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Copy public folder (robots.txt, logo.svg, etc.)
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

# Render injects PORT env var (default 10000)
EXPOSE 10000

ENV PORT=10000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
