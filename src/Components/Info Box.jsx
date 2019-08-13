import React from 'react';
import './Info Box.css';

function InfoBox(props) {
    return (
        <div id="InfoBox">
            <div class="section">
                <div class="header">
                    <h3>Tertiary Education</h3>
                </div>
                <div class="information">
                    <ul>
                        <li>Full-stack Web Development Certificate (CoGrammar and Life Choices)</li>
                        <li>Telecommunication Network Operations (NQF Level 4) Certificate (FIT)</li>
                    </ul>
                </div>
            </div><br/>
            <div class="section">
                <div class="header">
                    <h3>Secondary Education</h3>
                </div>
                <div class="information">
                    <ul>
                        <li>Mathematics</li>
                        <li>English HL</li>
                        <li>Afrikaans HL</li>
                        <li>Physical Sciences</li>
                        <li>Information Technology</li>
                        <li>Music</li>
                        <li>Life Orientation</li>
                    </ul>
                </div>
            </div><br/>
            <div class="section">
                <div class="header">
                    <h3>Achievements</h3>
                </div>
                <div class="information">
                    <ul>
                        <li>Lion's Shield Award for outstanding Service (2016)</li>
                        <li>Prefects of 2015 Leadership Award (2016)</li>
                        <li>Honours Award for Outstanding Service to te School (2016)</li>
                        <li>Special Merit and Merit Awards for Service to the Schools Computer centre and Media Team (2015 - 2016)</li>
                        <li>First Team Hockey (Goal Keeper) Merit Award (2016)</li>
                        <li>Choir Chairperson (2016)</li>
                        <li>First Aid Committee Member (2014 - 2016)</li>
                        <li>Computer Prefect (2016)</li>
                        <li>Computer Monitor (2013-2015)</li>
                    </ul>
                </div>
            </div><br/>
            <div class="section">
                <div class="header">
                    <h3>Other Qualifications</h3>
                </div>
                <div class="information">
                    <ul>
                        <li>Health Identification and Risk Assessment (HIRA (NOSA)) (2018)</li>
                        <li>First-Aid Level 1 (2018 - 2020)</li>
                        <li>First-Aid Level 3 (2013 - 2016)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default InfoBox;