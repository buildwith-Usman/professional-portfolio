import { NextRequest } from 'next/server';
import { Server as NetServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';
import { setupSocket } from '@/lib/socket';

export const dynamic = 'force-static';
export const revalidate = false;

let io: SocketIOServer;

export async function GET(req: NextRequest) {
  if (!io) {
    const server = (global as any).server as NetServer;
    if (server) {
      io = new SocketIOServer(server, {
        path: '/api/socketio',
        cors: {
          origin: "*",
          methods: ["GET", "POST"]
        }
      });
      setupSocket(io);
    }
  }

  return new Response('Socket.IO server initialized', { status: 200 });
}
