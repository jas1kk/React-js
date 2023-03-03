import React, { Component } from 'react'
import { ChangeEvent } from 'react';

interface IAddInputProps {
    onAdd: (text: string) => void
}

export default class AddInput extends Component<IAddInputProps> {

    state = {
        text: ''
    }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ text: event.target.value })
    }

    onSubmit = () => {
        this.props.onAdd(this.state.text);
        this.setState({ text: '' })
    }

    render() {
        return (
            <div>
                <input type="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                />
                <button
                    disabled={this.state.text.length === 0}
                    onClick={this.onSubmit}>
                    Add
                </button>
            </div>
        )
    }
}