import React from "react";


class CancelAppointment extends React.Component {

    constructor(props) {
        super(props);
        this.cancelAppointment = this.cancelAppointment.bind(this);
    }

    cancelAppointment(e) {
        e.preventDefault();
        let dog = { ...this.props.dog };
        const appointmentIdx = dog.appointments.findIndex(appointment => {
            return appointment.date === this.props.date;
        })

        dog.appointments.splice(appointmentIdx, 1);

        this.props.editDog(dog);
    }

    render() {
        return (
            <button onClick={this.cancelAppointment}
                className="cancel-appointment">
                Cancel Appointment
            </button>
        )
    }
}


export default CancelAppointment;