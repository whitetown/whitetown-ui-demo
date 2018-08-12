export default function randomIcon() {
    const iconNames = ["ios-add","ios-add-circle","ios-add-circle-outline","ios-airplane","ios-alarm","ios-albums","ios-alert","ios-american-football","ios-analytics","ios-aperture","ios-apps","ios-appstore","ios-archive","ios-arrow-back","ios-arrow-down","ios-arrow-dropdown","ios-arrow-dropdown-circle","ios-arrow-dropleft","ios-arrow-dropleft-circle","ios-arrow-dropright","ios-arrow-dropright-circle","ios-arrow-dropup","ios-arrow-dropup-circle","ios-arrow-forward","ios-arrow-round-back","ios-arrow-round-down","ios-arrow-round-forward","ios-arrow-round-up","ios-arrow-up","ios-at","ios-attach","ios-backspace","ios-barcode","ios-baseball","ios-basket","ios-basketball","ios-battery-charging","ios-battery-dead","ios-battery-full","ios-beaker","ios-bed","ios-beer","ios-bicycle","ios-bluetooth","ios-boat","ios-body","ios-bonfire","ios-book","ios-bookmark","ios-bookmarks","ios-bowtie","ios-briefcase","ios-browsers","ios-brush","ios-bug","ios-build","ios-bulb","ios-bus","ios-business","ios-cafe","ios-calculator","ios-calendar","ios-call","ios-camera","ios-car","ios-card","ios-cart","ios-cash"]

    let index = Math.floor( Math.random() * 1000 ) % iconNames.length

    return iconNames[index]
}
