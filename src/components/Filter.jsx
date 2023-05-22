import { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import Frame from '../assets/Frame.png';
import FrameDown from '../assets/FrameDown.png';
import { useForm } from '@mantine/form';
import { Button, Box } from '@mantine/core';
import { Select } from '@mantine/core';
import { Input } from '@mantine/core';

const Filter = observer(() => {
  const { item } = useContext(Context);
  const form = useForm({
    initialValues: { type: '', from: '', to: '' },
  });

  function submit(form) {
    console.log(form.values);
    item.setFilter(form.values);
  }
  function reset(form) {
    form.reset();
    item.setFilter({});
  }

  return (
    <Box maw={320} mx="auto" className="filter">
      <div className="filter_title">
        <span className="filter_main">Фильтры</span>

        <div className="filter_reset" onClick={() => reset(form)}>
          Сбросить все &times;
        </div>
      </div>

      <form className="filter_body">
        <div className="input_title">Отрасль</div>
        <Select
          className="input"
          data-elem="industry-select"
          placeholder="Выберите отрасль"
          {...form.getInputProps('type')}
          data={item.typeOfWork}
          rightSection={<img src={FrameDown} alt="" />}
        />
        <div className="input_title">Оклад</div>

        <Input
          data-elem="salary-from-input"
          className="input"
          style={{ marginBottom: 8 }}
          placeholder="От"
          {...form.getInputProps('from')}
          rightSection={<img src={Frame} alt="" />}
        />
        <Input
          data-elem="salary-to-input"
          rightSection={<img src={Frame} alt="" />}
          {...form.getInputProps('to')}
          placeholder="До"
          className="input"
        />
      </form>

      <Button
        data-elem="search-button"
        type="submit"
        className="filter_button"
        mt="sm"
        onClick={() => submit(form)}>
        Применить
      </Button>
    </Box>
  );
});
export default Filter;
