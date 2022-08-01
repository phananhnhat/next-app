import { Layout, AddEdit } from 'components/users';
import {Head} from '../../components/base';
import React from 'react';

export default Add;

function Add() {
  return (
    <>
      <Head title={'Register'} />
      <Layout>
        <h1>Add User</h1>
        <AddEdit />
      </Layout>
    </>
  );
}
