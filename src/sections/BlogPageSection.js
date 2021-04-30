import React from 'react'
import BlogPost from '../components/BlogComponents/BlogPost'
import Sidebar from '../components/BlogComponents/Sidebar'
import BlogPostData from '../Data/BlogData'
import {Link} from "react-router-dom"
function BlogPageSection() {
  
    return (
        <section id="blog-with-sidebar">
    <div className="container">
      <h3 className="d-none">heading</h3>
      <div className="col-lg-12 col-md-12 col-xs-12">
        <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 posts">
            {BlogPostData.map((data)=> {
                const {id,img,title,category,cmnts,date,content} = data;
                return(
                  <>
                    <BlogPost key={id} id={id} img={img} title={title} category={category} cmnts={cmnts} date={date} content={content} />
                    
                  </>
                )
            })}
          </div>
          <Sidebar />
        </div>
<nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item disabled"> <Link className="page-link" href="#" tabIndex="-1"><i className="flat flaticon-back"></i></Link> </li>
          <li className="page-item active"><Link className="page-link" href="#">1</Link></li>
          <li className="page-item"><Link className="page-link" href="#">2</Link></li>
          <li className="page-item"><Link className="page-link" href="#">3</Link></li>
          <li className="page-item"> <Link className="page-link" href="#"><i className="flat flaticon-arrow"></i></Link> </li>
        </ul>
      </nav>
      </div>
     
    </div>
    {/* <Switch>
            <Route path={`/Blog/:id`} render={props => <DetailedBlog {...props} data={BlogPostData}/> } />
        </Switch> */}
  </section>
    )
}

export default BlogPageSection
