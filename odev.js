window.mockApiUrl = "https://5ff1abd5db1158001748b425.mockapi.io/pets/";

window.removePet = (id) => {
  console.log(id) 

  fetch(`${window.mockApiUrl}${id}`, 
  {
    method : "delete"
  }).then(() => {
    window.location.reload()
  })
};

  window.petDetail = (pet) => {
    return `<div class="modal fade" id="exampleModal${pet.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          ${pet.name}
        </div>
      </div>
    </div>
  </div>`;
  };
  
  window.openPetDetail = (id) => {
    console.log(id);
    fetch(`${window.mockApiUrl}${id}`).then((response) => response.json()).then((data) => {
    const petDescription = petDetail(data);
    document.querySelector("#description").innerHTML = petDescription;
    $(`#exampleModal${id}`).modal("show");
  });

};
