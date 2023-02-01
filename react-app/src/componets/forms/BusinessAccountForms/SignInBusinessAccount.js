function SignInBusinessAccount() {
    return (
        <div id="SignInBusinessAccount">
            <SignInBusinessAccountPage2 />
        </div>
    )
}

function SignInBusinessAccountPage1() {
    return (
        <div id="SignInBusinessAccountPage1">
            <h2>Before starting, please ensure you have the following handy</h2>
            <h3>We may require additional information or documents later</h3>
            <div>
                <span>Business and contact address</span>
                <span>Mobile or telephone number</span>
            </div>
            <form>
                <div>
                    <label for="">Business location</label>
                    <select>
                        <option value="none" selected disabled hidden>Select a country</option>
                        <option value="canada">Canada</option>
                        <option value="mexico">Mexico</option>
                        <option value="united-states">United States</option>
                    </select>
                    <span>If you dont have a busines, enter your country  of residence.</span>
                    <span>An incorrect selection may affect the status of your account.</span>
                </div>
                <div>
                    <label for="">Select an entity type</label>
                    <select>
                        <option value="none" selected disabled hidden>Select an Option</option>
                        <option value="publicly-listed">Publicly-listed business</option>
                        <option value="privately-owned">Privately-owned business</option>
                        <option value="individual">None, I am an individual</option>
                    </select>
                </div>
                <div>
                    <label for="">Business Name, used to register with your state or federal government</label>
                    <input placeholder="Business name as it appears on business registartion document" />
                    <div>
                        <input type="checkbox" />
                        <label for="">I confirm my business location and type are correct, and I understand that  this information cannot be changed later.</label>
                    </div>
                </div>
                <div>
                    <p>
                        By clicking on 'Agree and continue', you agree to the Amazon Services Busines Solutions Agreement and Amazon's Privacy Notice.
                    </p>
                    <p>

                    </p>
                </div>
                <button type="button">Agree and continue</button>
            </form>
        </div>
    )
}


function SignInBusinessAccountPage2() {
    return (
        <div id="SignInBusinessAccountPage1">
            <h2>Business Information for <b>"Business Name"</b></h2>
            <form>
                <div>
                    <label for="">Company registration number</label><span><b>?</b></span>
                    <input />
                </div>
                <div>
                    <label>Registered business address</label><span><b>?</b></span>
                    <div>
                        <select>
                            <option value="none" selected disabled hidden>Select a country</option>
                        </select>
                        <input placeholder="Street Address"/>
                        <input placeholder="Address Line 2"/>
                        <input placeholder="State / Region"/>
                        <input placeholder="City / Town"/>
                        <input placeholder="ZIP / Postal code"/>
                    </div>
                </div>
                <div>
                    <label for="">Primary contact person</label>
                    <div>
                        <input placeholder="First Name"/>
                        <input placeholder="Middle name(s)"/>
                        <input placeholder="Last name"/>
                    </div>
                </div>
                <button type="button">Next</button>
            </form> 
        </div>
    )
}

function SignInBusinessAccountPage3() {
    return (
        <div id="SignInBusinessAccountPage1">
            <h2>Business Information for <b>"Business Name"</b></h2>
            <form>
                <div>
                    <label for="">Company registration number</label><span><b>?</b></span>
                    <input />
                </div>
                <div>
                    <label>Registered business address</label><span><b>?</b></span>
                    <div>
                        <select>
                            <option value="none" selected disabled hidden>Select a country</option>
                        </select>
                        <input placeholder="Street Address"/>
                        <input placeholder="Address Line 2"/>
                        <input placeholder="State / Region"/>
                        <input placeholder="City / Town"/>
                        <input placeholder="ZIP / Postal code"/>
                    </div>
                </div>
                <div>
                    <label for="">Primary contact person</label>
                    <div>
                        <input placeholder="First Name"/>
                        <input placeholder="Middle name(s)"/>
                        <input placeholder="Last name"/>
                    </div>
                </div>
                <button type="button">Next</button>
            </form> 
        </div>
    )
}

export default SignInBusinessAccount;
