import React from 'react';
import Project from './Project';

export default function DisplayList({displayed}) {
    if (displayed.length === 0) {
        return (
            <div className="empty-search">
                <h3>Sorry no project marched your search entry</h3>
            </div>
        )
    }
    return (
        <section className="displaylist">
        <div className="displaylist-center">
            {
                displayed.map(item => {
                    return <Project key={item.id} project={item} />;
                })}
            </div>
            </section>
    );
}
