import { Module } from '@nestjs/common';
import { BuilderModule } from './builder/builder.module';
import { FactoryModule } from './factory/factory.module';
import { SingletonModule } from './singleton/singleton.module';
import { AdapterModule } from './adapter/adapter.module';
import { DecoratorModule } from './decorator/decorator.module';
import { ObserverModule } from './observer/observer.module';
import { StrategyModule } from './strategy/strategy.module';
import { CommandModule } from './command/command.module';
import { PrototypeModule } from './prototype/prototype.module';
import { FacadeModule } from './facade/facade.module';
import { ProxyModule } from './proxy/proxy.module';
import { IteratorModule } from './iterator/iterator.module';
import { MediatorModule } from './mediator/mediator.module';
import { StateModule } from './state/state.module';
import { ChainModule } from './chain/chain.module';
import { FlyweightModule } from './flyweight/flyweight.module';
import { BridgeModule } from './bridge/bridge.module';
import { CompositeModule } from './composite/composite.module';
import { VisitorModule } from './visitor/visitor.module';
import { InterpreterModule } from './interpreter/interpreter.module';
import { MementoModule } from './memento/memento.module';
import { AbstractFactoryModule } from './abstract-factory/abstract-factory.module';

@Module({
  controllers: [],
  imports: [
    BuilderModule,
    FactoryModule,
    SingletonModule,
    AdapterModule,
    DecoratorModule,
    ObserverModule,
    StrategyModule,
    CommandModule,
    PrototypeModule,
    FacadeModule,
    ProxyModule,
    IteratorModule,
    MediatorModule,
    StateModule,
    ChainModule,
    FlyweightModule,
    BridgeModule,
    CompositeModule,
    VisitorModule,
    InterpreterModule,
    MementoModule,
    AbstractFactoryModule,
  ],
})
export class PatternsModule {}
