/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {connect} from 'react-redux';
import {BackButton} from './components/BackButton';
import {View, TextInput, FlatList, Text} from 'react-native';
import {BreedItem} from './components/BreedItem';
import {searchByBreed, loadBreeds} from '../actions/index';
import styled from 'styled-components';

const SearchComponent = props => {
  return (
    <Wrapper>
      <Header>
        <BackButton />
        <Title>Search by breed:</Title>
      </Header>
      <Search
        value={props.searchName}
        onChangeText={text => {
          props.searchByBreed(text);
        }}
      />
      {props.isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={props.searchPayload.length ? props.searchPayload : props.breeds}
          renderItem={({item}) => <BreedItem item={item} />}
          style={{width: '90%'}}
          showsVerticalScrollIndicator={false}
          onEndReached={() => props.loadBreeds()}
          onEndReachedThreshold={100}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled(View)({
  flex: 1,
  backgroundColor: '#f8f8f8',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

const Header = styled(View)({
  width: '100%',
  height: 50,
  flexDirection: 'row',
  alignItems: 'center',
});

const Title = styled(Text)({
  fontSize: 20,
  fontWeight: '700',
  color: '#ff7517',
});

const Search = styled(TextInput)({
  width: '85%',
  borderBottomWidth: 2,
  fontSize: 16,
  fontWeight: '700',
});

const mapStateToProps = state => {
  return {
    breeds: state.breeds,
    searchPayload: state.searchPayload,
    isLoading: state.isLoading,
    searchName: state.searchName,
  };
};

export default connect(
  mapStateToProps,
  {searchByBreed, loadBreeds},
)(SearchComponent);
