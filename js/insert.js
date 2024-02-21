
async function handlesubmit() {
    
    const title = document.querySelector(".write-title");
    const writer = document.querySelector(".write-writer");
    const password = document.querySelector(".write-password");
    const contents = document.querySelector(".write-contents");
    
    function convertDataKor(curruntDate) {
        const year = curruntDate.getFullYear();
        const month = curruntDate.getMonth() + 1;
        const date = curruntDate.getDate();
        return `${year}.${month}.${date}`;
    }


    const writeInfo = {
        title: title.value,
        writer: writer.value,
        password: password.value,
        contents: contents.value,
        date:convertDataKor(new Date())
    }
    
    console.log(writeInfo)

    const writeInfoData = JSON.stringify(writeInfo);

    const option = {
        method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: writeInfoData
       }
    
    try {

        fetch("http://localhost:8080/notice_board/write",option);
        // if(!response.ok) {
        //     throw await response.json();
        // }

        // const responsedata = await response.json();

        // console.log(responsedata.data);




    
    } catch(error) {
        console.log(error);
        alert(error.errorMessage);
    }

}