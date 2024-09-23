//  Toggle For History Button:

const HistoryTab = document.getElementById('btn-history')
HistoryTab.addEventListener('click', function () {
    GetId('btn-history').classList.add(
        "bg-gradient-to-r",
        "from-blue-600",
        "to-purple-600",
        "lg:w-28",
        "lg:text-lg",
        "text-white"
    );

    GetId('History-Window').classList.remove("hidden")
    GetId('Donate-Window').classList.add("hidden")

    GetId('btn-donation').classList.remove(
        "bg-gradient-to-r",
        "from-blue-600",
        "to-purple-600",
        "lg:w-28",
        "lg:text-lg",
        "text-white"
    );


})


//  Toggle For Donation Button:

const DonationTab = document.getElementById('btn-donation')
DonationTab.addEventListener('click', function () {
    GetId('btn-donation').classList.add(
        "bg-gradient-to-r",
        "from-blue-600",
        "to-purple-600",
        "lg:w-28",
        "lg:text-lg",
        "text-white"
    );

    GetId('History-Window').classList.add("hidden")
    GetId('Donate-Window').classList.remove("hidden")

    GetId('btn-history').classList.remove(
        "bg-gradient-to-r",
        "from-blue-600",
        "to-purple-600",
        "lg:w-28",
        "lg:text-lg",
        "text-white"
    );


})