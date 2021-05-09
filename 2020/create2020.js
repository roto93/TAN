window.onload = function () {
    let subtitleDOM = document.querySelector('.subtitle')
    subtitleDOM.innerHTML = subTitle;
    subtitleDOM.style.fontSize = fontSize + 'px'
    subtitleDOM.style.bottom = bottom + 'px'

    let titleDOM = document.querySelector('#title-btn')
    titleDOM.style.cursor = 'pointer'
    titleDOM.onclick = () => {
        localStorage.setItem('pageType', '')
        location.reload()
    }

    let item1 = document.querySelector('.item1')
    let item2 = document.querySelector('.item2')
    let item3 = document.querySelector('.item3')
    let item4 = document.querySelector('.item4')
    let item5 = document.querySelector('.item5')
    let item6 = document.querySelector('.item6')
    let item7 = document.querySelector('.item7')


    item1.onclick = function () {
        localStorage.setItem('pageType', 'A')
        location.reload()
    }
    item2.onclick = function () {
        localStorage.setItem('pageType', 'C')
        location.reload()
    }
    item3.onclick = function () {
        localStorage.setItem('pageType', 'S')
        location.reload()
    }
    item4.onclick = function () {
        localStorage.setItem('pageType', 'F')
        location.reload()
    }
    item5.onclick = function () {
        localStorage.setItem('pageType', 'J')
        location.reload()
    }
    item6.onclick = function () {
        localStorage.setItem('pageType', 'O')
        location.reload()
    }
    item7.onclick = function () {
        localStorage.setItem('pageType', 'M')
        location.reload()
    }
}


const pageType = localStorage.getItem('pageType')
let count = 0
let preDate
let bgc = ''

let subTitle = ''
let fontSize = 30
let bottom
let fontWeight
switch (pageType) {
    case 'A':
        subTitle = 'Announcement/ Newsletters';
        break
    case 'C':
        subTitle = 'Conferences/ Meetings';
        break
    case 'S':
        subTitle = 'Seminars/ Colloquia';
        break
    case 'F':
        subTitle = 'Forum';
        break
    case 'J':
        subTitle = 'Job Openings/ Fellowship/ Summer School/ Winter School';
        fontSize = 18
        bottom = 8
        break
    case 'O':
        subTitle = 'Observations';
        break
    case 'M':
        subTitle = 'Miscellaneous';
        break
    default:
        subTitle = ''
}

const createRow = function (type, date, ctx) {
    let index
    count = count + 1

    if (count > 0 & count < 10) { index = '00' + count.toString() } else if (count >= 10 & count < 100) { index = '0' + count.toString() } else { index = count.toString() }


    if (pageType == type | pageType == '') {

        if (date == preDate) { // 如果日期跟上一行相同
            preDate = date // 判斷完了，更新 preDate
            date = '' // 這一行就不要顯示日期
        } else { // 如果到這行日期改變了，就要顯示日期
            preDate = date // 判斷完了，更新 preDate
            bgc == '' ? bgc = '#F8FCED' : bgc = ''
        }

        let row = '<tr>\
                <td id="date" \
                    style="background:' + bgc + '; ">' + date +
            '<td id="sub" onclick="localStorage.setItem(\'file_name\',\'' + index + '.txt\');window.location=\'./content_page.html\'"\
                    style="background:' + bgc + ';"> - ' + ctx
        document.write(row);
    }
}