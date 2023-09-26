import { revalidate } from 'lib/shopify';
import { EdgeOrNode } from 'lib/utils';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = EdgeOrNode();

export async function POST(req: NextRequest): Promise<NextResponse> {
  return revalidate(req);
}
