class BudgetsController < ApplicationController
  before_action :set_budget, only: [:show, :update, :destroy]

  # GET /transactions
  def index
    @budgets = Transaction.all

    render json: @budgets
  end

  # GET /transactions/1
  def show
    render json: @budget
  end

  # POST /transactions
  def create
    @budget = Budget.new(budget_params)

    if @budget.save
      render json: @budget, status: :created, location: @budget
    else
      render json: @budget.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /transactions/1
  def update
    if @budget.update(budget_params)
      render json: @budget
    else
      render json: @budget.errors, status: :unprocessable_entity
    end
  end

  # DELETE /transactions/1
  def destroy
    @budget.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_budget
      @budget = Budget.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def budget_params
      params.require(:budget).permit(:balance)
    end
end
