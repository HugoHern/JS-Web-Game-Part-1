
//function to load art assets to body - use an image, pixels for left and bottom position
function newImage(img, left, bottom){
    let asset = document.createElement('img')
    asset.src = img
    asset.style.position = 'fixed'
    asset.style.left = left //pixels
    asset.style.bottom = bottom //pixels
    document.body.append(asset)
}

//function to load game items to body - use image, pixels for left and bottom position
function newItem(img, left, bottom){
    let item = document.createElement('img')
    item.src = img
    item.style.position = 'fixed'
    item.style.left = left //pixels
    item.style.bottom = bottom //pixels
    document.body.append(item)

    item.addEventListener('dblclick', function(){
        item.remove() //remove items from game when double clicked
    })
}


//loading art assets
newImage('assets/green-character.gif', '100px', '100px' )
newImage('assets/pine-tree.png', '450px', '200px')
newImage('assets/tree.png', '200px', '300px')
newImage('assets/pillar.png ', '350px', '100px')
newImage('assets/crate.png', '150px', '200px')
newImage('assets/well.png', '500px', '425px')

//load game items
newItem('assets/sword.png', '500px', '405px')
newItem('assets/sheild.png', '165px', '185px')
newItem('assets/staff.png', '600px', '100px')


