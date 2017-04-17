import argv from '../utils/argv';

export const distDir = 'dist';

export const remotePath = 'http://192.168.77.120:8080';
// export const remotePath = '..';

export const serveIp = argv.ip || '0.0.0.0';
export const servePort = argv.p || '8080';
export const servePath = argv.ip ? `http://${argv.ip}:${servePort}` : '';
