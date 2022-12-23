import { Component } from 'react';

import { MaterialEditorForm } from './MaterialEditorForm/MaterialEditorForm';
import * as API from '../services/api.js';
import { MaterialsList } from './MaterialEditorForm/MaterialsList';

export class App extends Component {
  state = {
    materials: [],
    isLoading: false,
  };

  async componentDidMount() {
    const materials = await API.getMaterials();
    this.setState({ materials });
  }

  addMaterial = async (values) => {
    try {
      this.setState({ isLoading: true });
      const material = await API.addMaterial(values);
      this.setState((state) => ({
        materials: [...state.materials, material],
        isLoading: false,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { materials } = this.state;
    return (
      <div>
        <MaterialEditorForm onSubmit={this.addMaterial} />
        <MaterialsList items={materials} />
      </div>
    );
  }
}

export default App;
