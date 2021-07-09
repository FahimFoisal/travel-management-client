import React from 'react';

const BlogSection = () => {
    return (
        <div style={{backgroundColor: 'rgb(247,247,249)'}}>
            <h3 className="text-center" style={{fontSize: '48px', fontWeight: '600', padding: '70px 0px'}}><span style={{color: 'rgb(140,180,64)'}}>Travel Blog</span> & News</h3>
            <div className="row w-75 mx-auto border-top border-1">
                <div className="col-md-3 border-end px-3 my-3">
                    <a href="#" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', fontSize:'13px', color:'black', fontWeight: '700', fontFamily: 'Open Sans, sans-serif'}}>TRAVEL GUIDE <i class="fas fa-arrow-alt-circle-right"></i></a>
                    <img src={'https://images.unsplash.com/photo-1531219432768-9f540ce91ef3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'} className="img-fluid mt-1" alt="" srcset="" />
                    <h5 style={{fontSize: '20px', fontWeight:'700'}} className="mt-3">10 ways to save money while travelling</h5>
                    <p className="mb-1" style={{fontSize: '13px', color: 'rgb(140,180,64)'}}><small><i class="far fa-clock"></i> 25 April, 2021</small></p>
                    <p className="text-muted" style={{fontSize: '14px'}}>Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quiaolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing…</p>
                </div>
                <div className="col-md-3 border-end px-3 my-3">
                    <a href="#" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', fontSize:'13px', color:'black', fontWeight: '700', fontFamily: 'Open Sans, sans-serif'}}>FOOD & WINE <i class="fas fa-arrow-alt-circle-right"></i></a>
                    <img src={'https://images.unsplash.com/photo-1614597135278-3ba43add6ad3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'} className="img-fluid mt-1" alt="" srcset="" />
                    <h5 style={{fontSize: '20px', fontWeight:'700'}} className="mt-3">Moroccan Inspired Chicken And Orzo — Rich, Warm And Spicy</h5>
                    <p className="mb-1" style={{fontSize: '13px', color: 'rgb(140,180,64)'}}><small><i class="far fa-clock"></i> 25 June, 2021</small></p>
                    <p className="text-muted" style={{fontSize: '14px'}}>When the weather is a bit iffy — snow, no snow? — either way, it’s going to be a chilly evening; this is the perfect dish to warm you up. I whipped up a Moroccan inspired chicken and Orzo dish that is so rich and comforting with lots of warm spices and plenty of kick…</p>
                </div>
                <div className="col-md-3 border-end px-3 my-3">
                    <a href="#" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', fontSize:'13px', color:'black', fontWeight: '700', fontFamily: 'Open Sans, sans-serif'}}>ADVENTURE <i class="fas fa-arrow-alt-circle-right"></i></a>
                    <img src={'https://images.unsplash.com/photo-1503856348302-6829f18073f9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'} className="img-fluid mt-1" alt="" srcset="" />
                    <h5 style={{fontSize: '20px', fontWeight:'700'}} className="mt-3">Parasailing in Pattaya – Majestic Views of the Ocean </h5>
                    <p className="mb-1" style={{fontSize: '13px', color: 'rgb(140,180,64)'}}><small><i class="far fa-clock"></i> 16 Dec, 2020</small></p>
                    <p className="text-muted" style={{fontSize: '14px'}}>When it comes to Pattaya, the first thing that comes to your mind is partying. If you wish to get your adrenaline flowing besides having fun, you should Parasail in Pattaya. Parasailing in Pattaya is one of the most popular beach sports that gets you to enjoy…</p>
                </div>
                <div className="col-md-3 px-3 my-3">
                    <a href="#" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', fontSize:'13px', color:'black', fontWeight: '700', fontFamily: 'Open Sans, sans-serif'}}>WEDDING TOURS <i class="fas fa-arrow-alt-circle-right"></i></a>
                    <img src={'https://images.unsplash.com/photo-1494063716425-20145394c915?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80'} className="img-fluid mt-1" alt="" srcset="" />
                    <h5 style={{fontSize: '20px', fontWeight:'700'}} className="mt-3">Top 5 destination for wedding</h5>
                    <p className="mb-1" style={{fontSize: '13px', color: 'rgb(140,180,64)'}}><small><i class="far fa-clock"></i> 05 Feb, 2021</small></p>
                    <p className="text-muted" style={{fontSize: '14px'}}>Congrats, you’re engaged! (Or, you can’t wait to be—wink wink.) If you’re reading this, you’re probably tired of endlessly scouring the internet for wedding inspiration, I get it! Or maybe, that’s actually all you do with your time now, and you’re loving every second of it—again…</p>
                </div>
            </div>
        </div>
    );
};

export default BlogSection;