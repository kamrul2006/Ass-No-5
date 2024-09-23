//  function For DOnate Noakhali:

const DonetNoakhali = document.getElementById('DNoa')
DonetNoakhali.addEventListener('click', function (event) {

    //    prevent default behavior; 
    event.preventDefault();

    // get money for donation ,
    const moneyToAdd = GetValue('NoaInput')
    const cb = GetText('MyMoney')
    const My_Money = parseFloat(cb)

    // donation of money: )

    if (moneyToAdd < 1) {
        alert('Pleas Enter Valid Amount !!!')
        return;
    }

    else if (moneyToAdd <= My_Money) {
        console.log('hello')
        // get the current ball:

        const nb = GetText('NoaMoney')
        const Noa_Money = parseFloat(nb)

        const My_Money = GetPFText('MyMoney')

        // add total amount:
        const NewBall = My_Money - moneyToAdd
        const NoaBall = Noa_Money + moneyToAdd
        console.log(NoaBall)

        // Update ball:
        document.getElementById('MyMoney').innerText = NewBall
        document.getElementById('NoaMoney').innerText = NoaBall

        document.getElementById('my_modal_5').showModal();
    }

    else if (moneyToAdd > My_Money) {
        alert('You Do not have enough money .')
        return;
    }

    const time = new Date();
    const div = document.createElement('div');
    div.innerHTML = `
                <div class=" border border-orange-300 p-3 lg:p-6 rounded-xl  mt-4">
                          
                <h1 class="text-[20px] font-bold "> ${moneyToAdd} Taka is Donated for Noakhali, Bangladesh.</h1>

                <p class="mt-4 text-[16px] text-gray-500 font-serif">
                 Date:  ${time}
                </p>
                </div>
    `;

    document.getElementById('History-Window').appendChild(div)
})


//  function For DOnate Feni:

const DonetFeni = document.getElementById('DFeni')
DonetFeni.addEventListener('click', function (event) {

    //    prevent default behavior; 
    event.preventDefault();

    // get money for donation ,

    const moneyToAdd = GetValue('FeniInput');
    const cb = GetText('MyMoney')
    const My_Money = parseFloat(cb)

    // donation of money: )
    if (moneyToAdd < 1) {
        alert('Pleas Enter Valid Amount !!!')
        return;
    }

    else if (moneyToAdd <= My_Money) {

        // get the current ball:

        const nb = GetText('FeniMoney')
        const Feni_Money = parseFloat(nb)


        // add total amount:
        const NewBall = My_Money - moneyToAdd
        const FeniBall = Feni_Money + moneyToAdd

        // Update ball:
        document.getElementById('MyMoney').innerText = NewBall
        document.getElementById('FeniMoney').innerText = FeniBall

        document.getElementById('my_modal_5').showModal();
    }

    else if (moneyToAdd > My_Money) {
        alert('You Do not have enough money .')
        return;
    }

    const time = new Date();
    const div = document.createElement('div');
    div.innerHTML = `
                <div class=" border border-green-300  p-3 lg:p-6 rounded-xl  mt-4">
                          
                <h1 class="text-[20px] font-bold "> ${moneyToAdd} Taka is Donated for Feni , Bangladesh.</h1>

                <p class="mt-4 text-[16px] text-gray-500 font-serif">
                 Date:  ${time}
                </p>
                </div>
    `;

    document.getElementById('History-Window').appendChild(div)
})


//  function For DOnate Aid for Injured in the Quota Movement.:

const DonetQU = document.getElementById('DQ')
DonetQU.addEventListener('click', function (event) {

    //    prevent default behavior; 
    event.preventDefault();

    // get money for donation ,

    const moneyToAdd = GetValue('QInput');
    const cb = GetText('MyMoney')
    const My_Money = parseFloat(cb)

    // donation of money: )

    if (moneyToAdd < 1) {
        alert('Pleas Enter Valid Amount !!!')
        return;
    }

    else if (moneyToAdd <= My_Money) {

        // get the current ball:

        const nb = GetText('QMoney')
        const Q_Money = parseFloat(nb)


        // add total amount:
        const NewBall = My_Money - moneyToAdd
        const QBall = Q_Money + moneyToAdd

        // Update ball:
        document.getElementById('MyMoney').innerText = NewBall
        document.getElementById('QMoney').innerText = QBall

        document.getElementById('my_modal_5').showModal();
    }

    else if (moneyToAdd > My_Money) {
        alert('You Do not have enough money .')
        return;
    }
    const time = new Date();
    const div = document.createElement('div');
    div.innerHTML = `
                <div class=" border border-red-300  p-3 lg:p-6 rounded-xl  mt-4">
                          
                <h1 class="text-[20px] font-bold s"> ${moneyToAdd} Taka is Donated for Aid for Injured in the Quota Movement.</h1>

                <p class="mt-4 text-[16px] text-gray-500 font-serif">
                 Date:  ${time}
                </p>
                </div>
    `;

    document.getElementById('History-Window').appendChild(div)
})


//  function For DOnate GAZA:

const DonetGaza = document.getElementById('DGaza')
DonetGaza.addEventListener('click', function (event) {

    //    prevent default behavior; 
    event.preventDefault();

    // get money for donation ,
    const moneyToAdd = GetValue('GazaInput')
    const cb = GetText('MyMoney')
    const My_Money = parseFloat(cb)

    // donation of money: )
    if (moneyToAdd < 1) {
        alert('Pleas Enter Valid Amount !!!')
        return;
    }

    else if (moneyToAdd <= My_Money) {

        // get the current ball:

        const nb = GetText('GazaMoney')
        const Gaza_Money = parseFloat(nb)


        // add total amount:
        const NewBall = My_Money - moneyToAdd
        const GazaBall = Gaza_Money + moneyToAdd

        // Update ball:
        document.getElementById('MyMoney').innerText = NewBall
        document.getElementById('GazaMoney').innerText = GazaBall

        document.getElementById('my_modal_5').showModal();
    }

    else if (moneyToAdd > My_Money) {
        alert('You Do not have enough money .')
        return;
    }

    const time = new Date();
    const div = document.createElement('div');
    div.innerHTML = `
                <div class=" border border-blue-300 p-3 lg:p-6 rounded-xl  mt-4">
                          
                <h1 class="text-[20px] font-bold "> ${moneyToAdd} Taka is Donated for Gaza .</h1>

                <p class="mt-4 text-[16px] text-gray-500 font-serif">
                 Date:  ${time}
                </p>
                </div>
    `;

    document.getElementById('History-Window').appendChild(div)
})

