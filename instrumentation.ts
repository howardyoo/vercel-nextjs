import { registerOTel } from '@vercel/otel'
 
export function register() {
  console.log('registering otel in instrumentation.ts');
  console.log(process.env);
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    import('./instrumentation.node');
  } else {
    registerOTel({ serviceName: 'nextjs-app' })
  }
}