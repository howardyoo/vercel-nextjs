import { NextResponse } from 'next/server';
import { trace } from '@opentelemetry/api';

export async function GET() {
  return await trace
    .getTracer('nextjs-example')
    .startActiveSpan('get-hello-message', async (span) => {
      const environment = process.env.NODE_ENV || 'development';
      try {
        return NextResponse.json({ 
          message: `👋 Hello from TypeScript API (${environment}).` 
        });
      } finally {
        span.end();
      }
    });
}
