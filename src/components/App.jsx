import { Component } from 'react';

import { MaterialEditorForm } from './MaterialEditorForm/MaterialEditorForm';
import * as API from '../services/api.js';
import { MaterialsList } from './MaterialEditorForm/MaterialsList';

export class App extends Component {
  state = {
    materials: [],
    isLoading: false,
    error: false,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const materials = await API.getMaterials();
      this.setState({ materials, isLoading: false });
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  }

  addMaterial = async (values) => {
    try {
      // this.setState({ isLoading: true });
      const material = await API.addMaterial(values);
      this.setState((state) => ({
        materials: [...state.materials, material],
        // isLoading: false,
      }));
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  };

  deleteMaterials = async (id) => {
    try {
      await API.deleteMaterials(id);
      this.setState((state) => ({
        materials: state.materials.filter((material) => material.id !== id),
      }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  updateMaterial = async (fields) => {
    try {
      const updatedMaterial = await API.updateMaterial(fields);
      this.setState((state) => ({
        materials: state.materials.map((material) =>
          material.id === fields.id ? updatedMaterial : material
        ),
      }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  render() {
    const { materials, isLoading, error } = this.state;
    return (
      <div>
        {error && (
          <p>Ой! что то пошло не так :( Попробуйте перезагрузить страницу</p>
        )}
        <MaterialEditorForm onSubmit={this.addMaterial} />
        {isLoading ? (
          'Loading'
        ) : (
          <MaterialsList
            items={materials}
            onDelete={this.deleteMaterials}
            onUpdate={this.updateMaterial}
          />
        )}
      </div>
    );
  }
}

export default App;
