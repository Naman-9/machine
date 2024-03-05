import React from 'react'

function DropDown() {
  return (
    <div>
      drop
    </div>
  )
}

export default DropDown

/**
 * 1- Data for accordion
 * 2- pass that data to accordion comp
 * 3- iterate data 
 * 4- when someone clicks on ques part 
 *  check -> if the index is "activeAccordionIndex" - then null
 *           else set it to active
 * 5- give "hidden" class to answers
 */