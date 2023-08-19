
const currentDay = dayjs()
const saveBtn = $(".btn")
function saveHandler(){
const element = $(this)
const text = element.siblings("textarea").val()
const id = element.parent().attr("id")
console.log(id)
localStorage.setItem(id,text)
}
$(".time-block").each(function(){
  const element = $(this)
  const time = element.attr("id").split("-")[1]
  console.log(time)
  console.log(currentDay.format("HH"))
  if(time==currentDay.format("HH")){
  element.addClass("present")
  } else if (time>currentDay.format("HH")){
    element.addClass("future")
  } else {
    element.addClass("past")
  }
})
saveBtn.on("click",saveHandler)
