import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CPagination
} from '@coreui/react'
import { DocsLink } from 'src/reusable'


const Paginations = () => {
  const [currentPage, setCurrentPage] = useState(2)

  return (
    <>
    <div className="container-fluid">
    <div className="row">
      <div className="back">
        <div className="plans">Our Plans</div>
      </div>
      <div className="tar">
        <div className="mar">

          <div className="col-sm-2">

            <br />
            <div className="bar">
              <label className="pl-5 padngLeft">Features</label>
              <p className="to">
                <span className="pull-right">Lorem ipsum dolar sit amet, constetur</span>
              </p>
              <p className="to"><span className="pull-right">Lorem ipsum dolar sit amet, <br></br>constetur</span></p>
              <p className="to"><span className="pull-right">Lorem ipsum dolar sit amet, constetur</span></p>
              <p className="to"><span className="pull-right">Lorem ipsum dolar sit amet, constetur</span></p>
              <p className="to"><span className="pull-right">Lorem ipsum dolar sit amet, constetur</span></p>
            </div>

          </div>


          <div className="three">
            <div className="col-sm-1">
              <div className="po">
                <div className="text-center">
                  <label className="labels">1 Month</label>
                </div>
                <div className="lala">FREE TRAIL</div>
                <p className="fontss">/PER MONTH</p>
                <br />
                <p className="ro"><img src="assets/images/Path_52673x.png" height="10px" width="10px" alt="" /></p>
                <p className="ro"><img src="assets/images/Path_52673x.png" height="10px" width="10px" alt="" /></p>
                <p className="ro"><img src="assets/images/Path_52673x.png" height="10px" width="10px" alt="" /></p>
                <p className="ro"><img src="assets/images/Path_52673x.png" height="10px" width="10px" alt="" /></p>
                <p className="ro"></p>
                <button className="yoyo">Upgrade</button>
              </div>
            </div>
          </div>
          <div className="col-sm-1">
            <div className="po1">
              <div className="active">
                <div className="text-center">
                  <label class="text-light">Frequent Rail Commuter Plan</label>
                </div>
                <div className="lala1">£2.99</div>
                <p className="fontss text-light">/PER MONTH</p>
                <p className="ro"><img src="assets/images/Path_52673x.png" height="10px" width="10px" alt="" /></p>
                <p className="ro"><img src="assets/images/Path_52673x.png" height="10px" width="10px" alt="" /></p>
                <p className="ro"><img src="assets/images/Path_52673x.png" height="10px" width="10px" alt="" /></p>
                <p className="ro"><img src="assets/images/Path_52673x.png" height="10px" width="10px" alt="" /></p>
                <p className="ro"><img src="assets/images/Path_52673x.png" height="10px" width="10px" alt="" /></p>
                <div className="text-center">
                  <button className="yoyo1">Upgrade</button>
                </div>
              </div>
            </div>

          </div>
          <div className="three">
            <div className="col-sm-1">
              <div className="po">
                <div className="text-center">
                  <label className="labels">Frequent Flyer Plan</label>
                </div>
                <div className="lala">£5.99</div>
                <p className="fontss">/PER MONTH</p>
                <p className="ro"><img src="assets/images/Path_52673x.png" height="10px" width="10px" alt="" /></p>
                <p className="ro"><img src="assets/images/Path_52673x.png" height="10px" width="10px" alt="" /></p>
                <p className="ro"><img src="assets/images/Path_52673x.png" height="10px" width="10px" alt="" /></p>
                <p className="ro"><img src="assets/images/Path_52673x.png" height="10px" width="10px" alt="" /></p>
                <p className="ro"></p>
                <button className="yoyo">Upgrade</button>

              </div>
            </div>
          </div>
          <div className="three">
            <div className="col-sm-1">
              <div className="po">
                <div className="text-center">
                  <label className="labels">Frequent Rail & Flight Combo</label>
                </div>
                <div className="lala">£6.99</div>
                <p className="fontss">/PER MONTH</p>
                <p className="ro"><img src="assets/images/Path_52673x.png" height="10px" width="10px" alt="" /></p>
                <p className="ro"><img src="assets/images/Path_52673x.png" height="10px" width="10px" alt="" /></p>
                <p className="ro"><img src="assets/images/Path_52673x.png" height="10px" width="10px" alt="" /></p>
                <p className="ro"><img src="assets/images/Path_52673x.png" height="10px" width="10px" alt="" /></p>
                <p className="ro"></p>
                <button className="yoyo">Upgrade</button>

              </div>
            </div>
          </div>
          <div className="three">
            <div className="col-sm-1">
              <div className="po">
                <div className="text-center">
                  <label className="labels">Occasional Rail Plan</label>
                </div>
                <div className="lala">£0.79</div>
                <p className="fontss">/PER MONTH</p>
                <p className="ro"><img src="assets/images/Path_52673x.png" height="10px" width="10px" alt="" /></p>
                <p className="ro"><img src="assets/images/Path_52673x.png" height="10px" width="10px" alt="" /></p>
                <p className="ro"><img src="assets/images/Path_52673x.png" height="10px" width="10px" alt="" /></p>
                <p className="ro"><img src="assets/images/Path_52673x.png" height="10px" width="10px" alt="" /></p>
                <p className="ro"></p>
                <button className="yoyo">Upgrade</button>

              </div>
            </div>
          </div>
          <div className="three">
            <div className="col-sm-1">
              <div className="po">
                <div className="text-center">
                  <label className="labels">Occasional Flight Plan</label>
                </div>
                <div className="lala">£1.99</div>
                <p className="fontss">/PER MONTH</p>
                <p className="ro"><img src="assets/images/Path_52673x.png" height="10px" width="10px" alt="" /></p>
                <p className="ro"><img src="assets/images/Path_52673x.png" height="10px" width="10px" alt="" /></p>
                <p className="ro"><img src="assets/images/Path_52673x.png" height="10px" width="10px" alt="" /></p>
                <p className="ro"><img src="assets/images/Path_52673x.png" height="10px" width="10px" alt="" /></p>
                <p className="ro"></p>
                <button className="yoyo">Upgrade</button>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>


  </div>

    </>
  )
}

export default Paginations
