
// prisma.service.ts

// 


import { Injectable } from '@nestjs/common';
// import { PrismaClient } from './generated/prisma/client';
import { PrismaClient } from "../../generated/prisma/client";
// import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

@Injectable()
export class PrismaService extends PrismaClient {}
