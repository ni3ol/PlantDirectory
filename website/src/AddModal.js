import React from "react";
import { Button, Modal, Form, Image } from "semantic-ui-react";
import plant from "./plants/plant.gif";
import "./css/AddModal.css";

export const AddModal = () => (
  <Modal trigger={<Button color="green">Add new plant</Button>}>
    <Modal.Header>
      <div className="header">
        Add a plant
        <Image src={plant} className="image" alt="missing" />
      </div>
    </Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Form>
          <Form.Field>
            <label>Name</label>
            <input placeholder="Arum Lily" />
          </Form.Field>
          <Form.Field>
            <label>Latin Name</label>
            <input placeholder="Zantedeschia" />
          </Form.Field>
          <Form.TextArea
            label="Description"
            placeholder="Zantedeschia is a genus of eight species of herbaceous, perennial, flowering plants in the family Araceae, native to southern Africa from South Africa north to Malawi."
          />
          <Form.Field>
            <label>Sun Requirements</label>
            <input placeholder="Full sun" />
          </Form.Field>
          <Form.Field>
            <label>Water Requirements</label>
            <input placeholder="Weekly" />
          </Form.Field>
          <Form.Field>
            <label>Feeding Requirements</label>
            <input placeholder="Bi-weekly" />
          </Form.Field>
          <input type="file" id="myFile" name="filename" />
          <Button type="submit">Save</Button>
        </Form>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);


const a = [1,2,3]

const []