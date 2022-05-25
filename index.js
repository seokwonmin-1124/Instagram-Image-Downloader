// const link = "https://www.instagram.com/p/${userinput}/"
// 링크는 이런 형식

function downloadImgL() {
    const imgLink = $('.link').val();
    const a = $('L');
    a.attr('href', imgLink);
    a.attr('download', 'image.jpg');
}

function downloadImgM() {
    const link = $('.link').val();
}

function downloadImgS() {
    const link = $('.link').val();
}

function addButtons() {
    const content = $('.content');
    const buttons = `
    <div class = "btns">
        <a class = "L">
            <button id="btnL" onclick="downloadImgL()">Get full size of an image</button>
        </a>
        <a class = "M">
            <button id="btnM" onclick="downloadImgM()">Get middle size of an image</button>
        </a>
        <a class = "S">
            <button id="btnS" onclick="downloadImgS()">Get thumbnail of an image</button>
        </a>
        <a>
            <button id="btnN" onclick="reload()">convert new image</button>
        </a>
    </div>`;
    content.append(buttons);
    const exisit = $('.exisit').remove();
}

function reload() {
    location.reload();
}