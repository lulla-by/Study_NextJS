import { MongoClient } from "mongodb"
// 서버 사이드 코드를 지니고 있는 함수를 정의
// 클라이언트가 아닌 서버 사이드에서만 실행이 가능함, 클라이언트에 노출x

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    // client에서 실행되면 안되는 코드 => 보안상의 문제
  const clinet = await MongoClent.connect(`mongodb+srv://lee:${process.env.REACT_MONGODB}@nexttjs.hquh822.mongodb.net/meetups?retryWrites=true&w=majority`)
    const db = clinet.db()

    const meetusCollection = db.colletion("meetups")
    const result = await meetusCollection.insertOne({data})
    console.log(result)
    clinet.close()

    res.status(201).json({message:"Meetup inserted!"})


    res
  }
}

export default handler;