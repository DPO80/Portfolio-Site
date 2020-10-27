import React from 'react';
import Detail from './Detail';

export default function ShowcaseList({showcased}) {
    if (showcased.length === 0) {
        return (
            <div className="empty-search">
                <h3>Sorry no project marched your search entry</h3>
            </div>
        )
    }
    return (
        <section className="showcaselist">
        <div className="showcaselist-center">
            {
                showcased.map(item => {
                    return <Detail key={item.id} detail={item} />;
                })}
            </div>
            </section>
    );
}



    