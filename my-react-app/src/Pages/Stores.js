import React, { useContext, useState, useEffect } from "react";
import { Grid, Segment, Card } from "semantic-ui-react";
import Store from "../components/Store";
import Pagination from "../components/Pagination";
import AddStoreForm from "../components/AddStoreForm";
import DelStoreForm from "../components/DelStoreForm";
import UpdateStoreForm from "../components/UpdateStoreForm";
import Context from "../config/context";

export default function Stores() {
  const context = useContext(Context);
  const { stores, getStores } = context;

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(9);

  useEffect(() => {
    getStores();
  }, []);

  // Get current categories
  const indexOfLastCategory = currentPage * cardsPerPage;
  const indexOfFirstCategory = indexOfLastCategory - cardsPerPage;
  const currentCategories = stores.slice(
    indexOfFirstCategory,
    indexOfLastCategory
  );

  const views =
    currentCategories.length > 0 ? (
      currentCategories.map((store) => (
        <Store key={store.id} store={store} />
      ))
    ) : (
      <Card>
        <Card.Content>
          <h2>Nothing here!</h2>
        </Card.Content>
      </Card>
    );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pagination =
    stores.length > cardsPerPage ? (
      <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={stores.length}
        paginate={paginate}
      />
    ) : null;

  return (
    <div>
      <Segment>
        <Grid>
          <Grid.Column floated="left" width={3}>
            <h1>Recent Categories</h1>
          </Grid.Column>
          <Grid.Column floated="right" width={3}>
            <AddStoreForm />
          </Grid.Column>
          <Grid.Column floated="right" width={3}>
            <DelStoreForm />
          </Grid.Column>
          <Grid.Column floated="right" width={3}>
            <UpdateStoreForm />
          </Grid.Column>
        </Grid>
      </Segment>
      <Card.Group fluid itemsPerRow="3">
        {views}
      </Card.Group>
      <br />
      <center>{pagination}</center>
    </div>
  );
}
