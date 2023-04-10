const EditPoi = () => {
  return (
    <body>
    <div className="page update">
        <div class="main">
          <div class="header">
            <h2 class="title">Edit Point of Interest</h2>
          </div>
          <div class="centre">
            <div class="tabs">
              <a href="#" class=" tab red_tab">ENGLISH DATA</a>
              <a href ="#" class=" tab blue_tab">FRENCH DATA</a>   
              <a href="#" class= "tab clear_tab">OPTIONS</a>
            </div>
            <div class="table_div">
              <form action ="#" method = "get">
              <fieldset>
                <select name="artefacts" id="artefacts">
                  <option value="" disabled selected>Point of Interest Type</option>
                  <option value = "#"> Artefact 1</option>
                  <option value = "#"> Artefact 2</option>
                  <option value = "#"> Artefact 3</option>
                </select>
                <div class = 'form_group'>
                  <label for = "title" class = "title"> Title: </label>
                  <input class = "input_half" id = "title" type="text" name="title"/>
                </div>
                <div class = 'form_group'>
                  <label for = "description" class = "label"> Description: </label>
                  <input class = "input_half" id = "description" type="text" name="description"/>
                </div>
                <div class = 'form_group'>  
                  <label for = "related_pages" class = "label"> Related Pages: </label>
                  <input class = "input_half" id = "related_pages" type="text" name="related_pages"/>
                </div>
                <div class = 'form_group'>
                  <label for = "tags" class = "label"> Tags: </label>
                  <input class = "input_half" id = "tags" type="text" name="tags"/>
                </div>
                <div class = 'form_group'>
                  <label for = "upload_audio" class = "label"> Upload Audio Description: </label>
                  <input class = "input_half" id = "upload_audio" type="file" name="upload_audio"/>
                </div>
                <div class = 'form_group'>
                  <label for = "upload_img" class = "label"> Upload Images or Video: </label>
                  <input class = "input_half" id = "upload_img" type="file" name="upload_img"/>
                </div>
                <div class = 'form_group'>
                  <label for = "associated_artefact" class = "label"> Associated Artefact: </label>
                  <select name="artefacts" id="artefacts" class="input_half" style="width:50%;">
                    <option value = "#"> Artefact 1</option>
                    <option value = "#"> Artefact 2</option>
                    <option value = "#"> Artefact 3</option>
                  </select>
                </div>
                <div class = 'form_group'>
                  <label for = "location" class = "label"> Location: </label>
                  <input class = "input_half" id = "location" type="text" name="location"/>
                </div>
              </fieldset>
              <div>
                <button type = "submit" value ="Reset" class= "btn red_btn"> Save Changes </button>
                <button type = "reset" value ="Submit" class=" btn wht_btn"> Cancel </button>                
              </div>
              </form>
            </div>             
          </div>
        </div>
        </div>
    </body>
    

  )
}

export default EditPoi