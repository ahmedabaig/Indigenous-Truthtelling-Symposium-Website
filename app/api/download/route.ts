import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const downloadUrl = searchParams.get('url');
  const fileName = searchParams.get('fileName');

  if (!downloadUrl) {
    return new Response('url query param required', { status: 400 });
  }

  if (!fileName) {
    return new Response('fileName query param required', { status: 400 });
  }

  const response = await fetch(downloadUrl);

  if (!response.ok) {
    return new Response('Failed to fetch file', { status: 500 });
  }


  const fileBlob = await response.blob();

  // Set headers to trigger download with a specified filename
  const headers = new Headers();
  headers.append('Content-Disposition', `attachment; filename="${fileName}"`);
  headers.append('Content-Type', response.headers.get('Content-Type') || 'application/octet-stream');

  return new Response(fileBlob, { headers });
}