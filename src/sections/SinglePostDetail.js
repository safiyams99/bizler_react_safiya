import React from 'react'
import Sidebar from "../components/BlogComponents/Sidebar"
import PostComment from "../sections/PostComment"
import { Link } from "react-router-dom";

function DetailedBlog({data}) {
    const {img,title,category,cmnts,date,content,description,tags,author,commentData} = data
    return (
        <section id="single-post-detail">
        <div className="container">
            <div className="col-lg-12 col-md-12 col-xs-12">
                <div className="row">
                    <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12 blog-detail">
                        <div className="post-img">
                            <img src={img} alt="Post"/>
                        </div>
                        <div className="post-detail">
                            <div className="about-post">
                                <h4>{title}</h4>
                                <div className="post-status">
                                    <ul>
                                        <li><i className="flat flaticon-folder"></i> <span><Link to="/blog">{category}</Link></span>
                                        </li>
                                        <li><i className="flat flaticon-chat"></i> <span>{cmnts}</span></li>
                                        <li><i className="flat flaticon-calendar"></i> <span>{date}</span></li>
                                    </ul>
                                </div>
                                <div className="description">
                                    <p>{description}</p>
                                    <div className="special-quote">
                                       {content}
                                    </div>
                                    <p>{content}</p>
                                    <p>{description}</p>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="tags_share">
                                <div className="tags">
                                    <div className="title">Tags</div>
                                    <ul>
                                        {tags.map(tag=> 
                                        <li key={tag}>
                                            <Link to="/blog" title={tag}>{tag}</Link>
                                        </li>)}
                                        
                                    </ul>
                                </div>
                                <div className="share_on">
                                    <div className="title">Share On :</div>
                                    <div className="icons"><Link to="/"><i
                                        className="flat flaticon-facebook-logo"></i></Link> <Link to="/"><i
                                        className="flat flaticon-twitter"></i></Link> <Link to="/"><i
                                        className="flat flaticon-google-plus-logo"></i></Link> <Link
                                        to="/"><i
                                        className="flat flaticon-linkedin-logo"></i></Link> <Link to="/"><i
                                        className="flat flaticon-instagram"></i></Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="author_sec">
                            <div className="author-pic"><img src={author.img} alt="Author"/></div>
                            <div className="about-author">
                                <div className="name_designation">
                                    <h6>{author.name}</h6>
                                </div>
                                <div className="social_media">
                                    <ul>
                                        <li><Link to="/" title="Facebook"><i className="flat flaticon-facebook-logo"></i></Link></li>
                                        <li><Link to="/" title="Twitter"><i
                                            className="flat flaticon-twitter"></i></Link></li>
                                        <li><Link to="/" title="Google"><i
                                            className="flat flaticon-google-plus-logo"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="clearfix"></div>
                                <div className="description">
                                    <p>{author.description}</p>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="comments">
                            <h5>There are <span> 20 Comments </span> on this post</h5>
                            <div className="separator left-align">
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                            <div className="clearfix"></div>
                            <ol className="comments-list">
                                <li className="comment-item">
                                    <PostComment src={commentData[0].src} name={commentData[0].name} date={commentData[0].date} msg={commentData[0].msg}/>
                                    <ol className="comments-list reply">
                                        <li className="comment-item">
                                            <PostComment src={commentData[1].src} name={commentData[1].name}
                                                         date={commentData[1].date} msg={commentData[0].msg}/>
                                        </li>
                                    </ol>
                                </li>
                                <li className="comment-item">
                                    <PostComment src={commentData[2].src} name={commentData[2].name}
                                                 date={commentData[2].date} msg={commentData[0].msg}/>
                                    <ol className="comments-list reply">
                                        <li className="comment-item">
                                            <PostComment src={commentData[3].src} name={commentData[3].name}
                                                         date={commentData[3].date} msg={commentData[0].msg}/>
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </div>
                        <div className="reply_form">
                            <h5>Leave a Reply</h5>
                            <div className="separator left-align ">
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                            <form action="/">
                                <div className="row">
                                    <div className="col-md-4 col-sm-4 col-sm-4 col-xs-12 form-group">
                                        <input type="text" placeholder="Full Name"/>
                                    </div>
                                    <div className="col-md-4 col-sm-4 col-sm-4 col-xs-12 form-group">
                                        <input type="text" placeholder="Email"/>
                                    </div>
                                    <div className="col-md-4 col-sm-4 col-sm-4 col-xs-12 form-group">
                                        <input type="text" placeholder="Website URL"/>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-sm-12 col-xs-12 form-group">
                                        <textarea placeholder="Write Your review"></textarea>
                                    </div>
                                    <div className="col-md-3 col-sm-3 col-sm-5 col-xs-12 form-group mar-none">
                                        <button type="submit">Send Message <i className="flat flaticon-plane"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <Sidebar />
                </div>
            </div>
        </div>
    </section>
    )
}

export default DetailedBlog
