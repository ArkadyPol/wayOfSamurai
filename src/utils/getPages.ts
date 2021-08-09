const getPages = (currentPage: number, pagesCount: number) => {
  const pages = [1]
  if (currentPage < 13) currentPage = 13
  if (currentPage > pagesCount - 12) currentPage = pagesCount - 12
  let firstGap = Math.floor((currentPage - 1) / 11)
  if (firstGap <= 3) {
    for (let i = 1; i <= 10; i++) {
      pages.push(1 + firstGap * i)
    }
  } else {
    let firstStep = Math.pow(currentPage - 2, 1 / 11)
    for (let i = 10; i >= 1; i--) {
      let page = Math.ceil(currentPage - 1 - Math.pow(firstStep, i))
      pages.push(page)
    }
  }
  pages.push(currentPage - 1, currentPage, currentPage + 1)
  let secondGap = Math.floor((pagesCount - currentPage) / 11)
  if (secondGap <= 3) {
    for (let i = 10; i >= 1; i--) {
      pages.push(pagesCount - secondGap * i)
    }
  } else {
    let secondStep = Math.pow(pagesCount - currentPage - 1, 1 / 11)
    for (let i = 1; i <= 10; i++) {
      let page = Math.ceil(currentPage + Math.pow(secondStep, i))
      pages.push(page)
    }
  }
  pages.push(pagesCount)
  return pages
}

export default getPages