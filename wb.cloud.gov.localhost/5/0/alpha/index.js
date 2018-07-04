/**
 *  WET-BOEW 5 alpha
 *  @author: Government  of Canada
 *  @licence: MIT
 */
(function( doc, win, undef )
{


    <!--#include virtual="core.js" -->

    let nodes = doc.querySelectorAll("[data-wb5]");

    for (let elem of nodes)
    {
        let [ command, selector, options ] = elem.dataset.wb5.split( "@" );

        if ( command )
        {
            wb[ command ].call( elem, selector, options );
        }
    }


})(  document, window )
