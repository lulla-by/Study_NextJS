// 서버 사이드 코드를 지니고 있는 함수를 정의
// 클라이언트가 아닌 서버 사이드에서만 실행이 가능함, 클라이언트에 노출x

function handler(req,res){
 if(req.method === "POST"){
  const data = req.body;
  const {title, image,address,description} = data;

  
 }
}

export default handler;