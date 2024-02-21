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

            // console.log(responsedata.data.length);

            // let listNomber = new Array();


            // console.log(responsedata.data);

            // console.log(listNomber);

            
            
            const listData = document.querySelector(".board_list");
            for(let i = 0; i < responsedata.data.length; i++) {
                listData.innerHTML += `
                <div>
                    <div class="num">${i+1}</div>
                    <div class="title"><a href="view.html">${responsedata.data[i].title}</a></div>
                    <div class="writer">${responsedata.data[i].writer}</div>
                    <div class="date">${responsedata.data[i].date}</div>
                    <div class="count">33</div>
                </div>
                `
            }

            

        } catch(error) {
                console.log(error);
        }

        







}