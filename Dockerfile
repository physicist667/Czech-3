FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json ./
RUN npm install

COPY prisma ./prisma/
RUN npx prisma generate

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

EXPOSE 10000

ENV PORT=10000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
