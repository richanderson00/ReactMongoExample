/* global React */
/* global alert */
/* global MyInput, MyButton */
/* global TheFormChanged */

var RegisterUserForm = React.createClass({

    getInitialState: function() {

        return {model: {}, valid: false, validOnce: false,
            errorMessages: '',successMessages: '',
            debug: this.props.debug || ''  };
    },

    sayHello: function() { alert('hello'); },

    updateModel: function(name,value)
    {
        var currentModel;
        currentModel = this.state.model;
        currentModel[name] = value;
        this.setState( {model : currentModel},
            function() {
                if ( this.state.validOnce === true ) {
                        this.submitForm();
                }
                } );
    },

    submitForm: function() {

            this.validateForm();
            if (this.props.onChange) {
                this.props.onChange(this);
            }
    },

    validateForm: function() {

        // clear any error/success messages and set the validation state to false

        this.state.valid = false;
        this.setState( {errorMessages: ''});
        this.setState( {successMessages: ''});

        if ( !this.state.model.contactName)
        {
            this.setState( {errorMessages: "Please enter a contact name" },
                function() { this.refs.contactName.setFocus(); } );
            return;
        }

        if ( !this.state.model.email)
        {
            this.setState( {errorMessages: "Please enter an email address" },
                function() { this.refs.email.setFocus(); } );
            return;
        }

        if ( !this.state.model.pwd)
        {
            this.setState( {errorMessages: "Please enter a password" },
                function() { this.refs.pwd.setFocus(); } );
            return;
        }

        if ( !this.state.model.pwd2)
        {
            this.setState( {errorMessages: "Please confirm your password a password" },
                function() { this.refs.pwd2.setFocus(); } );
            return;

        }

        if ( this.state.model.pwd != this.state.model.pwd2 )
        {
            this.setState( {errorMessages: "Seriously, your passwords need to match, is it that hard?" } );
            return;
        }

        this.setState( {valid: true});
        this.setState( {validOnce: true});
        this.setState( {successMessages: "Awesome, your data is rocking and ready to go.  Hang tight..." } );
    },

    cancelForm: function() {
        this.refs.email.clearAndSetFocus();

    },

    focusEmail: function () {
        this.refs.email.setFocus();
    },

    // once the form elements are create, let's default to the first field

    componentDidMount() {

        this.refs.contactName.setFocus();
    },

    render: function()
    {
        return (
            <div>

                { this.state.errorMessages ?  <span className="vdl_error_banner"> {this.state.errorMessages } </span> : ''}
                { this.state.successMessages ?  <span className="vdl_success_banner"> {this.state.successMessages } </span> : ''}

                <div className="form">
                    <div>
                        <div className="vdl_field_container_field">
                            <MyInput ref="contactName" label='Contact Name' required="true" model={this.updateModel} modelName="contactName"/>
                        </div>
                        <div className="vdl_field_container_field">
                            <MyInput ref='contactNumber' label='Contact Phone Number' model={this.updateModel} modelName="contactNumber"/>
                        </div>
                    </div>

                    <div className="vdl_line_spacer"></div>

                    <div>
                        <div className="vdl_field_container_field">
                            <MyInput ref="email" label='Email' required="true" model={this.updateModel} modelName="email"/>
                        </div>
                        <div className="vdl_field_container_field">
                            <MyInput ref='pwd' label='Password' required="true" model={this.updateModel} modelName="pwd"/>
                        </div>
                        <div className="vdl_field_container_field">
                            <MyInput ref='pwd2' label='Confirm Password' required="true" model={this.updateModel} modelName="pwd2"/>
                        </div>

                        <div className="vdl_field_container_field">
                            <MyInput ref='preferences' label='Enable Preferences?' default='No' required="true" model={this.updateModel} modelName="enablePreferences"/>
                        </div>
                    </div>

                    <div className="vdl_line_spacer"></div>

                    <div className='vdl_button_bar'>
                        <MyButton text="Cancel" onAction={this.cancelForm}/>
                        <MyButton text="Set Focus on Email" onAction={this.focusEmail}/>
                        <MyButton text="Register" type="Primary" onAction={this.submitForm}/>
                   </div>
                    <div className="vdl_section_divider"></div>

                    // TODO: change getInitialState to convert prop into a boolean and then change this logic to use a boolean

                { this.state.debug == "true" ? <div>Debugging enabled. <br/> Model: <br />{this.state.model}</div> : ''}


                </div>


            </div>
        )
    }
});

React.render(
    <RegisterUserForm debug="false" onChange={TheFormChanged}/>
    ,
    document.getElementById('RegisterUserForm'));