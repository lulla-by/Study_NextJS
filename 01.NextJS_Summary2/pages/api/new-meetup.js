import { MongoClient } from "mongodb"
// 서버 사이드 코드를 지니고 있는 함수를 정의
// 클라이언트가 아닌 서버 사이드에서만 실행이 가능함, 클라이언트에 노출x


// NextJS는 요청이 이 경로에(/api/new-meetup) 도달하면 handler 함수를 트리거
async function handler(req, res) {

  if (req.method === "POST") {
    const data = req.body;
    // client에서 실행되면 안되는 코드 => 보안상의 문제
    const client = await MongoClient.connect(process.env.REACT_APP_MONGODB)
    const db = client.db()

    const meetupsCollection = db.collection("meetups")
    const result = await meetupsCollection.insertOne({ data })
    client.close()

    res.status(201).json({ message: "Meetup inserted!" })


  }
}

export default handler;