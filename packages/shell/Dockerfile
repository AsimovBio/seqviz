FROM node:14-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /kernel-universal

COPY .yarnrc.yml yarn.lock package.json tsconfig.json ./
COPY .yarn ./.yarn
COPY packages/shell/package.json ./packages/shell/
COPY packages/common/package.json ./packages/common/

# Install dependencies
RUN yarn -v
RUN yarn --immutable

# Rebuild the source code only when needed
FROM node:14-alpine AS builder
WORKDIR /kernel-universal

COPY . .
COPY --from=deps /kernel-universal/.yarn ./.yarn
COPY --from=deps /kernel-universal/.pnp.cjs ./
RUN yarn build

# Production image, copy all the files and run next
FROM node:14-alpine AS runner
WORKDIR /kernel-universal

ENV NODE_ENV production

COPY --from=deps /kernel-universal/.yarnrc.yml /kernel-universal/yarn.lock /kernel-universal/package.json /kernel-universal/tsconfig.json /kernel-universal/.pnp.cjs ./
COPY --from=builder /kernel-universal/.yarn ./.yarn

COPY --from=builder /kernel-universal/packages/shell/next.config.js ./packages/shell/next.config.js
COPY --from=builder /kernel-universal/packages/shell/package.json ./packages/shell/
COPY --from=builder /kernel-universal/packages/shell/public ./packages/shell/public
COPY --from=builder /kernel-universal/packages/shell/.next ./packages/shell/.next

COPY --from=builder /kernel-universal/packages/common/next.config.js ./packages/common/next.config.js
COPY --from=builder /kernel-universal/packages/common/package.json ./packages/common/
COPY --from=builder /kernel-universal/packages/common/public ./packages/common/public
COPY --from=builder /kernel-universal/packages/common/.next ./packages/common/.next

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
RUN chown -R nextjs:nodejs /kernel-universal/packages/shell/.next
RUN chown -R nextjs:nodejs /kernel-universal/packages/common/.next
USER nextjs

EXPOSE 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
RUN yarn next telemetry disable

CMD yarn workspace @asimov/kernel-shell run start
