window.onload = () => {
    getAddList();    
}

           

async function getAddList() {
        try {
            const response = await fetch("http://localhost:8080/notice_board//write/view")
            if(!response.ok) {
                throw await response.json();
            }           

            const responsedata = await response.json();

            // 파람스로 리스트에서 클릭한id 값 가져오기
                const urlParams = new URL(location.href).searchParams;
                let sid = urlParams.get('id')

            const listData = document.querySelector(".board_view");
            
            const searchData = responsedata.filter(data => data.id === parseInt(sid))[0];
            

            console.log(searchData);

            
        
            listData.innerHTML = `
            <div class="title">
                ${searchData.title}
            </div>
            <div class="info">
                <dl>
                    <dt>번호</dt>
                    <dd>${searchData.id}</dd>
                </dl>
                <dl>
                    <dt>글쓴이</dt>
                    <dd>${searchData.writer}</dd>
                </dl>
                <dl>
                    <dt>작성일</dt>
                    <dd>${searchData.date}</dd>
                </dl>
                <dl>
                    <dt>조회</dt>
                    <dd>미구동</dd>
                </dl>
            </div>    
                <div class="cont">
                    ${searchData.contents}
                </div>
                
                `;
            
        } catch(error) {
                console.log(error);
        }
    }