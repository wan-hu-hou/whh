import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config(); // 加载.env文件中的环境变量
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 5000; // 读取PORT环境变量，若未获取到则默认使用5000
  await app.listen(PORT);
  console.log(`Server running on port ${PORT}`); // 可选：打印当前运行端口
}
bootstrap();
