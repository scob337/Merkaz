const OpenAside = document.querySelector('.navbar-toggler')
const CloseAside = document.querySelector('.iconX')
const AsideBar = document.querySelector('.asidebar')
import {DontationsCard} from './data.js'

OpenAside.addEventListener('click', () => {
    AsideBar.style.cssText=`
    left:0;
    `
})


CloseAside.addEventListener('click', () => {
    AsideBar.style.cssText=`
    left:-200%;
    `
})

function FetchData() {
    const container = document.querySelector('#Donation .container .cards');

    DontationsCard.map(el => {
        let cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.style.width = '22rem';

        let imgDiv = document.createElement('div');
        imgDiv.classList.add('img', 'position-relative');
        let img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = `${el.img}`; 
        img.alt = "...";
        imgDiv.appendChild(img);

        let positionDiv = document.createElement('div');
        positionDiv.classList.add('position-absolute', 'bg-light', 'text-success');
        positionDiv.innerHTML = '<i class="fa-solid fa-house"></i> دعم ايجار';
        imgDiv.appendChild(positionDiv);

        cardDiv.appendChild(imgDiv);

        // إنشاء باقي الـ card-body
        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        let title = document.createElement('h5');
        title.classList.add('card-title');
        title.innerText = `${el.title}`; // يمكنك استبدالها بـ el.title أو بيانات أخرى
        cardBody.appendChild(title);

        let description = document.createElement('p');
        description.classList.add('card-text');
        description.innerText = `${el.description}`; // استبدلها بـ el.description
        cardBody.appendChild(description);

        // باقي العناصر
        let progDiv = document.createElement('div');
        progDiv.classList.add('prog', 'd-flex', 'gap-2', 'justify-content-between', 'align-items-center', 'bg-transparent');
        progDiv.innerHTML = `
            <div class="progress w-100 me-3 rounded-5" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar rounded-5" style="width: ${el.progress}%; background: linear-gradient(to right, #198754,#62f8b2);"></div>
            </div>
            <span>${el.progress}%</span>
        `;
        progDiv.setAttribute('dir', 'rtl');
                cardBody.appendChild(progDiv);

        let targetDiv = document.createElement('div');
        targetDiv.classList.add('target', 'd-flex', 'justify-content-center', 'gap-3', 'align-items-center', 'm-3');
        targetDiv.innerHTML = `
            <div class="d-flex flex-column text-center">
                <span><b>المتبقي</b></span>
                <span class="text-danger" dir="rtl">${el.Rest} ريال</span>
            </div>
            <i class="fa-solid fa-bullseye"></i>
            <div class="d-flex flex-column text-center">
                <span><b>المستهدف</b></span>
                <span class="text-success" dir="rtl">${el.target} ريال</span>
            </div>
        `;
        cardBody.appendChild(targetDiv);

        let buttonDiv = document.createElement('div');
        buttonDiv.classList.add('d-flex', 'justify-content-around', 'align-items-center');
        buttonDiv.innerHTML = `
            <i class="fa-solid fa-cart-shopping text-success"></i>
            <button type="button" class="btn btn-success rounded-5 w-75">تبرع الأن</button>
        `;
        cardBody.appendChild(buttonDiv);

        cardDiv.appendChild(cardBody);

        // إضافة الـ card إلى الـ DOM باستخدام appendChild
        container.append(cardDiv);
    });

}

// استدعاء الدالة لتظهر العناصر
FetchData();
