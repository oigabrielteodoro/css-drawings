const starsCount = 200
const cloudsCount = 3
const grassesCount = 200

const starsList = document.querySelector('[data-js="stars"]')
const cloudsList = document.querySelector('[data-js="clouds"]')
const grassesList = document.querySelector('[data-js="grasses"]')

function appendChild(maxCount, createElement) {
  for (let index = 0; index < maxCount; index++) {
    createElement()
  }
}

document.body.onload = () => {
  appendChild(cloudsCount, () => {
    const cloud = document.createElement('li')
    cloud.setAttribute('class', 'cloud')

    cloudsList.append(cloud)
  })

  appendChild(starsCount, () => {
    const star = document.createElement('li')
    star.setAttribute('class', 'star')

    starsList.append(star)
  })

  appendChild(grassesCount, () => {
    const grass = document.createElement('li')
    grass.setAttribute('class', 'grass')

    grassesList.append(grass)
  })
}