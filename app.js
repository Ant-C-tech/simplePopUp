'use strict'


let popup1 = new PopUp({
    openBtn: 'showModal-1',
    container: 'popupContainer-1',
    content: `<form>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputEmail4">Email</label>
        <input type="email" class="form-control" id="inputEmail4">
      </div>
      <div class="form-group col-md-6">
        <label for="inputPassword4">Password</label>
        <input type="password" class="form-control" id="inputPassword4">
      </div>
    </div>
    <div class="form-group">
      <label for="inputAddress">Address</label>
      <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
    </div>
    <div class="form-group">
      <label for="inputAddress2">Address 2</label>
      <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputCity">City</label>
        <input type="text" class="form-control" id="inputCity">
      </div>
      <div class="form-group col-md-4">
        <label for="inputState">State</label>
        <select id="inputState" class="form-control">
          <option selected>Choose...</option>
          <option>...</option>
        </select>
      </div>
      <div class="form-group col-md-2">
        <label for="inputZip">Zip</label>
        <input type="text" class="form-control" id="inputZip">
      </div>
    </div>
    <div class="form-group">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck">
        <label class="form-check-label" for="gridCheck">
          Check me out
        </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Sign in</button>
  </form>`,
    maskColor: '#0097A7',
    maskOpacity: '0.9',
})

let popup2 = new PopUp({
    openBtn: 'showModal-2',
    container: 'popupContainer-2',
    content: `<div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img class="card-img w-100" src="https://picsum.photos/500" alt="#">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Et accusantium vitae rem doloribus praesentium illum dolorem cum, quod dolores facilis, 
          laboriosam alias fugiat quaerat! Quod exercitationem unde facilis quia vel! 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Et accusantium vitae rem doloribus praesentium illum dolorem cum, quod dolores facilis, 
          laboriosam alias fugiat quaerat! 
          Quod exercitationem unde facilis quia vel! Lorem ipsum dolor sit amet consectetur
           adipisicing elit. Et accusantium vitae rem doloribus praesentium illum dolorem cum, quod 
           dolores facilis, laboriosam alias fugiat quaerat! Quod exercitationem unde facilis quia 
           vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et accusantium vitae rem 
           doloribus praesentium illum dolorem cum, quod dolores facilis, laboriosam alias fugiat quaerat! 
           Quod exercitationem unde facilis quia vel!</p>
          <p class="card-text">
          <small class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Et accusantium vitae rem doloribus praesentium illum dolorem cum, quod dolores facilis, 
          laboriosam alias fugiat quaerat! Quod exercitationem unde facilis quia vel!</small></p>
        </div>
      </div>
    </div>
  </div>`,
    maskColor: '#009688',
    maskOpacity: '0.75',
})

let popup3 = new PopUp({
    openBtn: 'showModal-3',
    container: 'popupContainer-3',
    content: `<div class="container">
    <div class="card-deck mb-3 text-center">
      <div class="card mb-4 box-shadow">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">Free</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">$0 <small class="text-muted">/ mo</small></h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>10 users included</li>
            <li>2 GB of storage</li>
            <li>Email support</li>
            <li>Help center access</li>
          </ul>
          <button type="button" class="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
        </div>
      </div>
      <div class="card mb-4 box-shadow">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">Pro</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">$15 <small class="text-muted">/ mo</small></h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>20 users included</li>
            <li>10 GB of storage</li>
            <li>Priority email support</li>
            <li>Help center access</li>
          </ul>
          <button type="button" class="btn btn-lg btn-block btn-primary">Get started</button>
        </div>
      </div>
      <div class="card mb-4 box-shadow">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">Enterprise</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">$29 <small class="text-muted">/ mo</small></h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>30 users included</li>
            <li>15 GB of storage</li>
            <li>Phone and email support</li>
            <li>Help center access</li>
          </ul>
          <button type="button" class="btn btn-lg btn-block btn-primary">Contact us</button>
        </div>
      </div>
    </div>
  </div>`,
    maskColor: '#9E9E9E',
    maskOpacity: '0.8',
})