import { faker } from "@faker-js/faker"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  // 테스트 계정 생성
  const user = await prisma.user.create({
    data: {
      email: "test@naver.com",
      token: "$2a$12$n.X/bznSecOEiczpO7KznurCMP11JtMI9w7CxTI4J.8YYPhUb0xQ.",
      name: "테스트",
      thumbnail: faker.image.avatar(),
    },
  })

  // 더미 회사 목록 생성
  await prisma.company.createMany({
    data: Array.from({ length: 10 }).map(() => ({
      name: faker.company.name(),
      address: faker.location.city(),
      email: faker.internet.email(),
      ownerId: user.id,
    })),
  })
}

main()
