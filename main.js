let container = document.querySelector(".container");
let range = container.querySelector(".range");
let slider = range.querySelector(".slider");
let value = container.querySelector(".value span");


slider.style.width = `${range.getBoundingClientRect().height + 10}px`
slider.style.height = `${range.getBoundingClientRect().height + 10}px`
slider.style.left = `-${slider.getBoundingClientRect().width / 2}px`
slider.style.transform = `translateY(-${(slider.getBoundingClientRect().height - range.getBoundingClientRect().height) / 2}px)`

slider.addEventListener("mousedown", _ => {
    document.addEventListener("mousemove", mousemoveF);
    document.addEventListener("mouseup", mouseupF);
})

// 115px

function mousemoveF(e) {
    slider.style.left = `${Math.max(-slider.getBoundingClientRect().width / 2, Math.min(e.x - range.getBoundingClientRect().left - slider.getBoundingClientRect().width / 2, range.getBoundingClientRect().width - slider.getBoundingClientRect().width / 2))}px`
    value.textContent = Math.round((slider.getBoundingClientRect().right - slider.getBoundingClientRect().width / 2 - range.getBoundingClientRect().left) / (range.getBoundingClientRect().width / 100))
};

function mouseupF() {
    document.removeEventListener("mousemove", mousemoveF);
    document.removeEventListener("mouseup", mouseupF);
}

document.addEventListener("keydown", e => {
    let percentage = +value.textContent;
    if ((e.key === "ArrowRight" || e.key === "ArrowUp") && percentage >= 0 && percentage < 100) {
        slider.style.left = `calc(${++percentage}% - ${slider.getBoundingClientRect().width / 2}px)`
        percentage = percentage;
        value.textContent = Math.round((slider.getBoundingClientRect().right - slider.getBoundingClientRect().width / 2 - range.getBoundingClientRect().left) / (range.getBoundingClientRect().width / 100))
    } else if ((e.key === "ArrowLeft" || e.key === "ArrowDown") && percentage > 0 && percentage <= 100) {
        slider.style.left = `calc(${--percentage}% - ${slider.getBoundingClientRect().width / 2}px)`
        percentage = percentage;
        value.textContent = Math.round((slider.getBoundingClientRect().right - slider.getBoundingClientRect().width / 2 - range.getBoundingClientRect().left) / (range.getBoundingClientRect().width / 100))
    }
})


